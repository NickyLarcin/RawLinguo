import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2e58cIguBK85hJceWgrqXNf8MdA",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};