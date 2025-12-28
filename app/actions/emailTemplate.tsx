interface EmailTemplateProps {
    mail: string;
    message: string;
}

export function EmailTemplate({ mail, message }: EmailTemplateProps) {
    return (
        <div>
            <h1>Demande de contact</h1>
            <p>Numéro de téléphone : {mail}</p>
            <p>Message : {message} </p>
        </div>
    );
}