import Link from "next/link";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center max-sm:px-4 relative">
      <div className="absolute bottom-2">
        <p className="font-mono text-sm text-zinc-300">
          {new Date().toLocaleString().slice(0, 8)}
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold max-sm:text-2xl">
          Website is currently under construct.
        </h1>
        <p className="text-zinc-300">
          We are currently working hard to bring you an exciting website. Stay
          tuned for updates!
        </p>
        <div className="mt-2">
          <Link
            href={"https://discord.gg/thievesfun"}
            className="text-zinc-300 hover:text-white duration-150"
          >
            Join Discord
          </Link>
        </div>
      </div>
    </div>
  );
}
