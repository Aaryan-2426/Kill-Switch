function Navbar() {
  return (
    <header className="h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold text-cyan-400">
          Kill Switch
        </h1>
        <p className="text-sm text-gray-400">
          Autonomous Wallet Protection
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-green-400 font-medium">
          System Active
        </span>
      </div>
    </header>
  );
}

export default Navbar;