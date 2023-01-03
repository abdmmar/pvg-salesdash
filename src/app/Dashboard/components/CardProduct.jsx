export default function CardProduct({ product }) {
  return (
    <div className="grid min-w-32 items-center justify-center gap-1 rounded-xl py-3 px-3 text-center ring-4">
      <div className="grid place-items-center">
        <img src={product.img} alt="Product Logo" className="h-14 w-14 object-contain" />
      </div>
      <span className="text-base font-bold text-klikoo-primary-100">{product.name}</span>
      <span className="text-sm font-bold text-gray-500">{product.price}</span>
      <div>
        <span className="text-base font-bold">{product.transaction}</span>
        <span className="text-xs font-bold"> transactions</span>
      </div>
    </div>
  )
}
