export default function realPrice(price, discountpercentage) {
    return price - ((price * discountpercentage) / 100)
}