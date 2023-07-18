import { memo } from 'react'
import Header from '../header';
import Footer from '../footer';

const masterLayout = ({children, ...props}) => {
    return (
        <div {...props}>
            <Header/>
            {children}
            <Footer />
        </div>
    )


}

export default memo(masterLayout);
//memo là một hàm dùng để tối ưu hóa hiệu suất của các thành phần React 
//bằng cách lưu trữ bản sao bộ nhớ đệm của thành phần và chỉ render lại thành phần khi các props của nó thay đổi.