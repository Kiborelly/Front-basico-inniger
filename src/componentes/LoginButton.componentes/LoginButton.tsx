import { type MouseEventHandler } from 'react';

interface SocialButtonProps {
  icon: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
//dd//
export default function SocialButton({ icon, text, onClick }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 flex items-center justify-center gap-2 
                 bg-black-soft hover:bg-black-main
                 border border-line hover:border-cream-dim
                 text-cream-dim hover:text-cream 
                 font-inter text-sm font-light
                 rounded-lg py-2.5 px-4
                 transition-all duration-300 ease-in-out 
                 cursor-pointer shadow-sm dynamic-glow"
    >
      <img src={icon} alt="" className="w-5 h-5 object-contain" />
      <span>{text}</span>
    </button>
  );
}