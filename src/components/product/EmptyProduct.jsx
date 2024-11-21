import empty from "../../assets/icons/empty.png";
export default function EmptyProduct() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-5 ">
      <img src={empty} alt="empty" className="w-32" />
      <h1 className="text-2xl font-medium">No Product is Available</h1>
    </div>
  );
}
