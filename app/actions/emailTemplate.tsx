interface EmailTemplateProps {
    phone: string;
    message: string;
}

export function EmailTemplate({ phone, message }: EmailTemplateProps) {
    return (
        <div>
            <h1>Demande de contact</h1>
            <p>Numéro de téléphone : {phone}</p>
            <p>Message : {message} </p>
        </div>
    );
}