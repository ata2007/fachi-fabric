export const WHATSAPP_NUMBER = "2349132066508";

export const openWhatsApp = (message = "Hi Fachi Fabric Ventures, I'd like to make an enquiry.") => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export const orderOnWhatsApp = (fabricName, price) => {
  const message = `Hi Fachi Fabric Ventures, I'm interested in *${fabricName}*${
    price ? `, listed at NGN ${Number(price).toLocaleString()} per yard` : ""
  }. Could you confirm the current price and availability?`;
  openWhatsApp(message);
};
