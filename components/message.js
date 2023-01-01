import Link from "next/link";
export default function Message({ children, avatar, username, description, title,id }) {
    return (
        <div className="bg-white p-8 border-b-2 rounded-lg m-2 shadow-lg max-h-80 overflow-auto">
            <div className="flex items-center gap-2">
                <img src={avatar} className="w-10 rounded-full" />
                <h2 className="text-sm">{username}</h2>
            </div>
            <div className="py-4">

                <Link href={{ pathname: `/${id}`, query: { avatar, username, description, title,id } }}>
                    <button className="underline text-md font-bold">
                        {/* {post.comments?.length > 0 ? post.comments?.length : 0} comments */}
                        <h3 className="font-bold italic underline">{title}</h3>
                    </button>
                </Link>            
                <p className="text-sm">{description}</p>
            </div>
            {children}
        </div>
    );
}
