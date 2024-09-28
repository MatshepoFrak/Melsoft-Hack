import speech_recognition as sr
from gtts import gTTS
import os
import tempfile

def recognize_speech():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)
    
    try:
        print("Recognizing...")
        text = recognizer.recognize_google(audio)
        print(f"User said: {text}")
        return text
    except sr.UnknownValueError:
        print("Sorry, I couldn't understand that.")
        return None
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")
        return None

def text_to_speech(text):
    tts = gTTS(text=text, lang='en')
    with tempfile.NamedTemporaryFile(delete=False, suffix='.mp3') as fp:
        tts.save(fp.name)
        os.system(f"mpg321 {fp.name}")  # You may need to install mpg321 or use another audio player
    os.unlink(fp.name)

# This function can be called from avatar.py
def process_voice_input():
    user_input = recognize_speech()
    if user_input:
        # Process the input using the models from avatar.py
        from avatar import nlp_model, face_model, timing_model
        import numpy as np

        # Prepare the input for NLP model
        nlp_input = np.array([ord(c) for c in user_input]).reshape(1, -1, 1)
        nlp_result = nlp_model.predict(nlp_input)

        # For demonstration, we'll assume face_model and timing_model 
        # require similar input preparation
        face_input = np.random.rand(1, 128, 128, 3)  # Placeholder input
        face_result = face_model.predict(face_input)

        timing_input = np.random.rand(1, 10, 1)  # Placeholder input
        timing_result = timing_model.predict(timing_input)

        # Combine the results (this is a simplified example)
        combined_result = (nlp_result + face_result + timing_result) / 3

        # Generate a response based on the combined result
        if combined_result > 0.5:
            response = f"I processed your input: '{user_input}'. The result seems positive."
        else:
            response = f"I processed your input: '{user_input}'. The result seems negative."
        response = f"You said: {user_input}"
        text_to_speech(response)
        return user_input
    return None
