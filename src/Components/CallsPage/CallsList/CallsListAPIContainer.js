import React, { useEffect } from "react";
import axios from "axios";
import CallsList from "./CallsList";

const CallsListAPIContainer = (props) => {

    useEffect(() => {
        axios
            .post("https://api.skilla.ru/mango/getList?limit=30", null, {
                headers: {
                    Authorization: "Bearer testtoken",
                },
            })
            .then((response) => {
                props.setCalls(response.data.results);
            });
    }, []);

    return (
        <CallsList
            calls={props.calls}
        />
    )
}

export default CallsListAPIContainer
