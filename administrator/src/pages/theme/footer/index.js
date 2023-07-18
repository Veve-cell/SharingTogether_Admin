import { memo } from 'react'

const Footer = () => {
    return <h1>Footer</h1>;
}

export default memo(Footer);
//memo là một hàm dùng để tối ưu hóa hiệu suất của các thành phần React bằng cách lưu trữ bản sao bộ nhớ đệm của thành phần và chỉ render lại thành phần khi các props của nó thay đổi.