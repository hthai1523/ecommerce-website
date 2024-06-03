const CURRENTCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
    style: "currency",
  });

export default function formatCurrentcy(number) {
    return CURRENTCY_FORMATTER.format(number);
}
