import { Injectable } from '@angular/core';
import { OpenAI } from "openai";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: "YOUR_API_KEY",
    });
  }

  async getSuggestion(input: string) {
    const response = await this.openai.completions.create({
      model: 'gpt-4', // Use latest model (or 'text-davinci-003' if needed)
      prompt: input,
      max_tokens: 256
    });

    console.debug('🔥 suggestion', response.choices[0].text);
  }
}
