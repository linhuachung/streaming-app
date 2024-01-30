import {getSelf} from "@/lib/auth-service";
import {db} from "@/lib/db";

export const getStreams = async () => {
    let userId;

    try {
        const self = await getSelf()
        userId = self.id
    } catch {
        userId = null
    }

    let stream = []
    if (userId) {
        stream = await db.stream.findMany({
            where: {
                user: {
                    NOT: {
                        blocking: {
                            some: {
                                blockedId: userId
                            }
                        }
                    }
                }
            },
            select: {
                id: true,
                user: true,
                isLive: true,
                name: true,
                thumbnailUrl: true
            },
            orderBy: [
                {
                    isLive: 'desc'
                },
                {
                    updatedAt: "desc"
                }
            ]
        })
    } else {
        stream = await db.stream.findMany({
            select: {
                id: true,
                user: true,
                isLive: true,
                name: true,
                thumbnailUrl: true
            },
            orderBy: [
                {
                    isLive: 'desc'
                },
                {
                    updatedAt: "desc"
                }
            ]
        })
    }

    return stream
}
