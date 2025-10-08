'use client'

interface LabelProps {
    text: string;

}

export default function Label({ text }: LabelProps) {
    return (
        <label className=
            "flex items-center">
            {text}

        </label>
    )
}
