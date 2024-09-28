from transformers import AutoProcessor, AutoModel
import torch
import soundfile as sf

class TextToSpeech:
    def __init__(self, model_name="facebook/fastspeech2-en-ljspeech"):
        self.processor = AutoProcessor.from_pretrained(model_name)
        self.model = AutoModel.from_pretrained(model_name)

    def generate_speech(self, text, output_file="output.wav"):
        inputs = self.processor(text=text, return_tensors="pt")
        speech = self.model.generate_speech(inputs["input_ids"], inputs["attention_mask"])
        sf.write(output_file, speech.numpy(), samplerate=16000)
        return output_file
