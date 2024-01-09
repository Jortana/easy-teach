import prisma from '../../lib/prisma';

export default async function Home() {
  const user = await prisma.user.findUnique({
    where: { id: '1' }
  });

  console.log(user);

  return (
    <>
      <div>hello world</div>
      <div>{user?.name}</div>
    </>
  );
}
