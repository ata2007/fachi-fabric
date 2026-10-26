export const NUMBERS = {
  boss: "2348065168619",
  worker: "234913206508",
};

export const WHATSAPP_NUMBER = NUMBERS.boss;

export const openWhatsApp = (
  message = "Hi Fachi Fabric Ventures, I'd like to make an enquiry.",
  number = WHATSAPP_NUMBER
) => {
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export const orderOnWhatsApp = (fabricName, price, number = WHATSAPP_NUMBER) => {
  const message = `Hi Fachi Fabric Ventures, I'm interested in *${fabricName}*${
    price ? ` (NGN ${Number(price).toLocaleString()})` : ""
  }. Is it available?`;
  openWhatsApp(message, number);
};
