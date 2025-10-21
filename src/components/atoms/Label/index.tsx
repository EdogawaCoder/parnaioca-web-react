'use client'

import { LabelProps } from "./type";

export default function Label({ text }: LabelProps) {
    return (
        <label className=
            "flex items-center">
            {text}

        </label>
    )
}
