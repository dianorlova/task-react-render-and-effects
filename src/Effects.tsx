import { useState, useEffect } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState(-1);

    const callback = (sourceMessage: number) => {
        setMessage(sourceMessage);
    };

    useEffect(() => {
        setMessage(-1);
        subscribe(props.sourceId, callback);

        return () => {
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
