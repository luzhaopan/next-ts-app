import Link from 'next/link';

export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-between p-24 text-yellow-500">Login</div>
      <Link href="/dashboard">
        跳转路由dashboard
      </Link>
    </>
  )
}
