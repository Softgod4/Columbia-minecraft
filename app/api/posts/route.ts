import { NextResponse } from "next/server";
import { UUID, randomUUID } from "crypto";
const fetch = require('node-fetch')

const url = "https://api.yookassa.ru/v3/payments";
const auth = Buffer.from(
  "239599:test_iU_rt6-TBibfF_VpVz_MnX69t-rIC17GYxZ7FrK4_-w",
).toString("base64");
// const idempotenceKey = randomUUID();
const idempotenceKey = '50b318fe-1e23-452e-9b09-3094dba633ac'

const data = {
    amount: {
      value: "100.00",
      currency: "RUB",
    },
    capture: true,
    confirmation: {
      type: "redirect",
      return_url: "https://columbiastory.ru/market",
    },
    description: "Заказ №1",
    receipt: {
      items: [
        {
          description: "Проходка",
          quantity: "1.00",
          amount: {
            value: "100.00",
            currency: "RUB",
          },
          vat_code: 1,
        },
      ],
      customer: {
        full_name: "Дорошенко Артём Игоревич",
        email: "columbis1supp@gmail.com",
        phone: "+79687088236",
      },
    },
  };

export async function POST(req: Request, res: Response) {
    return NextResponse.json({ message: data})
}

async function yookassa() {
    fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Idempotence-Key": idempotenceKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response: any) => response.json())
        .then((result: any) => {
          console.log(result);
          
        })
        .catch((error: string) => {
          console.error(error);
        });
}