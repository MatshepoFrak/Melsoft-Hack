import mediapipe as mp
import cv2
import numpy as np
from gtts import gTTS
from pydub import AudioSegment
from pydub.playback import play
import tempfile
import os

# Initialize MediaPipe Face Mesh
mp_face_mesh = mp.solutions.face_mesh
face_mesh = mp_face_mesh.FaceMesh(static_image_mode=True)

# Generate speech from text using gTTS
def generate_speech(text, output_file='speech.mp3'):
    tts = gTTS(text=text, lang='en')
    tts.save(output_file)
    return output_file

# Extract amplitude from audio to simulate mouth opening (simplified)
def get_audio_amplitude(audio_file):
    audio = AudioSegment.from_file(audio_file)
    samples = np.array(audio.get_array_of_samples())
    amplitude = np.abs(samples) / np.max(np.abs(samples))  # Normalize amplitude
    return amplitude

# Use MediaPipe to simulate face motion based on amplitude (simplified)
def process_face_motion(frame, amplitude):
    # Placeholder function: Use amplitude to adjust mouth-related landmarks
    h, w, _ = frame.shape
    landmarks = np.zeros((468, 2))  # Placeholder for 468 face landmarks
    
    # For simplicity, assume landmarks 13-16 are mouth corners (it's more complex in reality)
    mouth_indices = [13, 14, 15, 16]  # These are example indices for the mouth area
    
    for i in mouth_indices:
        landmarks[i] = [np.random.uniform(0, w), np.random.uniform(0, h * amplitude)]  # Random mouth movement
        
    for landmark in landmarks:
        cv2.circle(frame, (int(landmark[0]), int(landmark[1])), 2, (0, 255, 0), -1)
    
    return frame

# Main function: Generate speech, extract amplitude, and simulate face motion
def sync_speech_and_face(text):
    # Generate speech
    speech_file = generate_speech(text)
    
    # Load the audio file and extract amplitude data
    amplitude = get_audio_amplitude(speech_file)
    
    # Load a test image (placeholder for video frame, typically this would be a webcam stream)
    cap = cv2.VideoCapture(0)  # Use the webcam for real-time video feed
    
    # Play the speech in the background
    audio = AudioSegment.from_file(speech_file)
    play(audio)  # Play audio asynchronously
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        
        # Simulate processing face motion based on audio amplitude
        amplitude_value = amplitude[np.random.randint(len(amplitude))]  # Randomly pick amplitude for simplicity
        frame = process_face_motion(frame, amplitude_value)
        
        # Show the face with simulated motion
        cv2.imshow('Face Motion Sync', frame)
        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
    cap.release()
    cv2.destroyAllWindows()

# Run the function with sample text
sync_speech_and_face("Hello! This is a test for synchronizing speech and face motion.")
