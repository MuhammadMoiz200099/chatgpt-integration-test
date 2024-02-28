import OpenAIApi from "openai";
import { v4 as uuidv4 } from "uuid";

export class ChatService {

    constructor() {
    }

    async chat(payload): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const { msg } = payload;
                const completion = await (new OpenAIApi({ apiKey: process.env.OPENAI_API_KEY, organization: process.env.OPENAI_ORGANIZATION } )).chat.completions.create({
                    messages: [{ role: "system", content: msg }],
                    model: "gpt-3.5-turbo",
                });
                const id = uuidv4()
                const response = {
                    id,
                    question: msg,
                    answer: completion.choices[0].message.content
                }
                return resolve(response)
            } catch (err) {
                return reject(err);
            }
        })
    }
}

export default new ChatService();