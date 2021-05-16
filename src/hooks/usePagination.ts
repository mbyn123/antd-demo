import { useState } from 'react';

export default () => {
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10
    });

    return {
        pagination,
        setPage(current:number,pageSize:number) {
            setPagination({ current, pageSize })
        }
    };
}

