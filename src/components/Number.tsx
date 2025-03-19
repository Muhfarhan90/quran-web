type NumberProps = {
  nomor: number;
};

function Number({ nomor }: NumberProps) {
  return (
    <div className="w-8 h-8 rounded-full flex flex-col items-center justify-center bg-accent-light text-light">
        {nomor}
    </div>
  );
}

export default Number;
