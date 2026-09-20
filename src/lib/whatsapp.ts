import type { CartItem } from "../types";
import { BUSINESS_NAME, WHATSAPP_NUMBERS } from "./constants";
import { formatINR } from "./format";

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
}

export function buildOrderMessage(items: CartItem[], customer: CustomerInfo, grandTotal: number) {
  const lines: string[] = [];
  lines.push(`*${BUSINESS_NAME} ORDER*`);
  lines.push("");
  lines.push(`Customer Name: ${customer.name || "-"}`);
  lines.push(`Phone: ${customer.phone || "-"}`);
  lines.push(`Address: ${customer.address || "-"}`);
  lines.push("");
  lines.push("Products:");
  items.forEach((item) => {
    lines.push(
      `- ${item.product.nameEn} (${item.product.nameTa}) x ${item.qty} = ${formatINR(item.product.price * item.qty)}`
    );
  });
  lines.push("");
  lines.push(`Total Amount: ${formatINR(grandTotal)}`);
  return lines.join("\n");
}

export function whatsappOrderUrl(message: string, number: string = WHATSAPP_NUMBERS.primary) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function whatsappSingleProductUrl(productName: string, productNameTa: string) {
  const message = `Hi ${BUSINESS_NAME}, I would like to order:\n${productName} (${productNameTa})\n\nPlease share availability and price confirmation.`;
  return whatsappOrderUrl(message);
}
