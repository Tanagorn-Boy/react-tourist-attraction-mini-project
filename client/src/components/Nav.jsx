function Nav({ input, setInput }) {
  return (
    <header className="flex items-center flex-col mt-6 w-full max-w-3xl">
      <h1 className="text-5xl text-[#3D93CF] font-medium">เที่ยวไหนดี</h1>
      <div className=" w-full mb-1">
        <p>ค้นหาที่เที่ยว</p>
      </div>
      <input
        type="text"
        placeholder="หาที่เที่ยวแล้วไปกัน..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-b border-gray-300 pb-4 mb-12 w-full text-center rounded-sm"
      />
    </header>
  );
}

export default Nav;
