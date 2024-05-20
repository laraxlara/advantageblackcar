import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../config/nodemailer";

type Data = {
  name: string;
  nameSubject: string;
  surname: string;
  phone: number;
  email: string;
  emailContact: string;
  pickUpAdress: { lat: number | null; lng: number | null; name: string | null };
  dropOffAdress: {
    lat: number | null;
    lng: number | null;
    name: string | null;
  };
  date: string;
  subjectContact: string;
  message: string;
  messageContact: string;
};

type Response = {
  error?: string;
  status?: string;
  message?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const {
    name,
    nameSubject,
    surname,
    phone,
    email,
    emailContact,
    pickUpAdress,
    dropOffAdress,
    date,
    subjectContact,
    message,
    messageContact,
  } = req.body as Data;

  if (req.method !== "POST") {
    return res.status(404).send({ status: "fail", error: "Begone." });
  }

  try {
    await transporter.sendMail({
      to: "laraxlara97@gmail.com",
      from: `${email}`,
      replyTo: email,
      subject: ` Advantage Black Car - Form`,
      html: `<div style="width: 100%; background-color: #b0b0b0; padding: 5rem 0">
      <div style="max-width: 700px; background-color: white; margin: 0 auto">
        <div style="width: 100%; background-color: #5c5e5c; padding: 20px 0">
        
        </div>
        <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid;">
          <p style="font-weight: 800; font-size: 1.5rem; padding: 0 30px">
            Advantage Black Car
          </p>
          <div style="width: 100%; height: 1px; background-color: #000; margin: 20px 0;"></div>
          <div style="font-size: .8rem; margin: 0 30px">
          ${
            email
              ? `<p style="font-weight: bold; font-size: 1.4rem;">BOOKING FORM</p>`
              : email
              ? `<p style="font-weight: bold; font-size: 1.4rem;">CHECK AVAILABILITY FORM</p>`
              : emailContact
              ? `<p style="font-weight: bold; font-size: 1.4rem;">CONTACT FORM</p>`
              : ""
          }
          ${
            name
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Name:</span> ${name}</p>`
              : nameSubject
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Name:</span> ${nameSubject}</p>`
              : ""
          }
          ${
            surname
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Name:</span> ${surname}</p>`
              : ""
          }
          ${
            phone
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Phone Number:</span> ${phone}</p>`
              : ""
          }
          ${
            subjectContact
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Subject:</span> ${subjectContact}</p>`
              : ""
          }
          
          ${
            email
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Email Adress:</span> ${email}</p>`
              : emailContact
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Email Adress:</span>${emailContact}</p>`
              : ""
          }
          
          ${
            date
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Date Of The Ride:</span> ${date}</p>`
              : ""
          }
          ${
            pickUpAdress
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Pick Up Location:</span> ${pickUpAdress.name} \n ${pickUpAdress.lng} ${pickUpAdress.lat}</p>`
              : ""
          }
          ${
            dropOffAdress
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Drop Off Location:</span> ${dropOffAdress.name}  ${dropOffAdress.lng}  ${dropOffAdress.lat}</p>`
              : ""
          }
          ${
            message
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Message:</span> ${message}</p>`
              : messageContact
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Message:</span> ${messageContact}</p>`
              : ""
          }
          </div>
        </div>
      </div>
    </div>`,
    });

    res.status(200).send({ status: "done", message: "Message has been sent" });
  } catch (error) {
    res.status(500).send({ status: "fail" });
  }
};

export default handler;
