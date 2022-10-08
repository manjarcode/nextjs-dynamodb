export default function getConfig() {
    const isDev = process.env.NEXT_PUBLIC_ENV == 'dev'
    
    return {
        host: isDev ? '//localhost:3000' : '//nextjs-dynamodb-qihcv4dey-slaverise.vercel.app'
    }
}