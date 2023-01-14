import React from 'react'
interface Message{
    data: number
}
export default function ErrorMessege(props: Message) {
     if (props.data ===1) {
        return <div className="text-blue-500">가입이 가능한 이메일입니다.</div>;
    } else {
        return (
          <div className='text-red-600'>중복된 이메일 혹은 올바르지 않은 형식 입니다.</div>
        )        
    }
}
