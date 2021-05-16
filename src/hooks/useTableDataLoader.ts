import { useState, useEffect, useRef } from 'react';
import { message } from 'antd';
import { useMountedRef } from './useMountedRef';

export default (api: any, pagination: any, searchParams: any, ...rest: any) => {
    const [data, setData] = useState({
        total: 0,
        tableData: []
    });
    const [loading, setLoading] = useState(false);
    const [isAsk, setIsAsk] = useState(false)
    const mountedRef = useMountedRef()


    useEffect(() => {
        setLoading(true);
        setData({
            total: 0,
            tableData: []
        })
        const loadData = async () => {
            const res = await api({ ...pagination, ...searchParams, ...rest }).catch((err: any) => err)
            if (res.code !== 0 && res.code !== 10001) {
                message.error(res.message);
                setLoading(false)
                return
            }
            const { list, total } = res.data
            if (mountedRef.current)
                setData({ tableData: list, total });
            setLoading(false)
        }
        isAsk && loadData()
    }, [pagination, searchParams, ...rest]);

    return {
        data, loading, setIsAsk
    };
}

