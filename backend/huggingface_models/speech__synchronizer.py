import time
from .text_to_speech import TextToSpeech

class SpeechSynchronizer:
    def __init__(self):
        self.tts = TextToSpeech()

    def synchronize_speech(self, text, avatar_speak_function):
        audio_file = self.tts.generate_speech(text)
        
        # Get the duration of the generated audio
        import wave
        with wave.open(audio_file, 'rb') as audio:
            frames = audio.getnframes()
            rate = audio.getframerate()
            duration = frames / float(rate)

        # Start the avatar speaking
        avatar_speak_function(text)

        # Wait for the duration of the speech
        time.sleep(duration)
