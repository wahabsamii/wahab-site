import React from "react";
import { MapPin, Mail, PhoneCall } from "lucide-react";

const ContactInfoSection = () => {
  const cards = [
    {
      icon: <MapPin className="text-white" size={28} />,
      title: "Address",
      lines: ["Peshawar Ring Road", "Main Kabootar Chowk 942"],
    },
    {
      icon: <Mail className="text-white" size={28} />,
      title: "E-Mail",
      lines: ["wahabsami.dev@gmail.com", "wahabsami09@gmail.com"],
    },
    {
      icon: <PhoneCall className="text-white" size={28} />,
      title: "Call Me",
      lines: ["+92-311-1535282", "+92-344-1619945"],
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-4 md:px-20">
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] rounded-xl text-center py-10 px-6"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-[#FF014F] rounded-full p-4">{card.icon}</div>
            </div>
            <h3 className="text-lg font-extrabold mb-2">{card.title}</h3>
            {card.lines.map((line, i) => (
              <p key={i} className="text-sm text-gray-400">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoSection;
