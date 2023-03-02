'use client';

const synth = window.speechSynthesis;

export default function Speaker() {
  const onSpeak = () => {
    synth.speak(new SpeechSynthesisUtterance('exaggeration'));
  };

  return (
    <div className="space-y-8">
      <button onClick={onSpeak}>Speak</button>
    </div>
  );
}
