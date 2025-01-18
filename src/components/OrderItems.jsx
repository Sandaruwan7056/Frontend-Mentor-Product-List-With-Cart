function OrderItems({ item }) {
  return (
    <>
      <div className="py-4 flex justify-between border-b-rose-300 border-b border-opacity-50 items-center">
        <div className="flex gap-4">
          <img src={item.image.thumbnail} alt="" width={50} height={50} />

          <div>
            <h1 className="text-sm font-semibold">{item.name}</h1>

            <div className="flex gap-4">
              <p className="text-red text-sm font-bold">x{item.quantity}</p>
              <p className="text-sm text-rose-500">@ ${item.price}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold text-rose-900">
            ${item.quantity * item.price}
          </p>
        </div>
      </div>
    </>
  );
}
export default OrderItems;
