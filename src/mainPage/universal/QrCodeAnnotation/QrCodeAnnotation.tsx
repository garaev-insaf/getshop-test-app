import * as React from "react";
import "./styles/QrCodeAnnotation.scss";

const QrCodeAnnotation = () => {
    return (
        <div className="qr-code-annotation">
            <p className="qr-code-annotation__description">Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
            <img src="/images/qr-code.png" alt="qr-code" />
        </div>

    );
};
export { QrCodeAnnotation };
