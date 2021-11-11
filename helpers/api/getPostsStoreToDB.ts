import { Collection } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const getPostsThenStoreToDB = async (
  request: NextApiRequest,
  res: NextApiResponse,
  DB: Collection
) => {
  try {
    const response = await fetch(
      `https://api.typeform.com/forms/${process.env.TYPE_FORM_ID}/responses`,
      {
        headers: {
          Authorization: `Bearer tfp_G5bR4u16DKazhxfLkiWmTFJTrFHc4Vr9f3zAKwaFwed4_3pc4pAfnGPS2UF`,
          Accept: "application/json",
        },
      }
    );
    if (!response.ok)
      throw new Error("Could not get responses from Typeform API");
    const data = await response.json();

    const requiredData = data.items?.map((answer) => answer.answers);
    const finalResult = requiredData.map((ans) => {
      const [
        name,
        email,
        experience,
        languages,
        techUsed,
        techToLearn,
        interests,
        possibleProjects,
        possibleProjectsSpace,
      ] = ans;
      return {
        id: request.headers.userid,
        name: name.text,
        email: email.email,
        experience: experience.choice.label,
        languages: languages.choices.labels,
        techUsed: techUsed.text,
        techToLearn: techToLearn.text,
        interests: interests.text,
        possibleProjects: possibleProjects.boolean,
        possibleProjectsSpace: possibleProjectsSpace?.text,
      };
    });
    finalResult.forEach((ans) => {
      DB.insertOne({ ...ans });
    });

    res.status(200).json({ Status: "Success" });
  } catch (err) {
    res.status(404).json({ err });
  }
};

export default getPostsThenStoreToDB;
