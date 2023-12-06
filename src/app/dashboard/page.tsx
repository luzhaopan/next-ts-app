import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col items-center justify-between p-24">
        Dashboard
      </div>
      <Link href="/login">
        跳转路由
      </Link>
    </>
  )
}
