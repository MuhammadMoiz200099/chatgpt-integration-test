import OpenAIApi from "openai";

export class ChatService {

    private openAI;


    constructor() {
        this.openAI = new OpenAIApi();
    }

    async chat(payload): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const { msg } = payload;
                const completion = await this.openAI.chat.completions.create({
                    messages: [{ role: "system", content: "You are a helpful assistant." }],
                    model: "gpt-3.5-turbo",
                });
               return resolve(completion.choices[0])
            } catch (err) {
                return reject(err);
            }
        })
    }
}

export default new ChatService();