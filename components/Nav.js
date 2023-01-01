import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {
    const [user, loading] = useAuthState(auth);
    console.log(user)
    return (
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
                <button className="text-lg font-medium hover:scale-[1.1] duration-300">BloG App</button>
            </Link>
            <ul className="flex items-center gap-10">
                {!user && (
                    <div className="flex items-center gap-6">
                        <Link href={"/post"}>
                            <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-md text-sm">Ask AI</button>
                        </Link>
                    </div>
                )}
                {!user && (
                    <Link href={"/auth/login"}>
                        <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-md text-sm">
                            Join Now
                        </button>
                    </Link>
                )}
                {user && (
                    <div className="flex items-center gap-6">
                        <Link href={"/post"}>
                            <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-md text-sm hover:scale-[1.1] duration-300">Post</button>
                        </Link>
                        <Link href={"/dashboard"}>
                            <div className="flex items-center">
                                <img className="w-12 rounded-full cursor-pointer hover:scale-[1.1] duration-300" src={user.photoURL} alt="" />
                                <p className="ml-1 cursor-pointer hover:scale-[1.1] duration-300">{user.displayName}</p>
                            </div>
                        </Link>
                    </div>
                )}

            </ul>
        </nav>
    );
}
