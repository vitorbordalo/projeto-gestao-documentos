import React from 'react';
import Button from '../UI/Button';
import { downloadBlob } from '../../utils/download';

export default function DownloadButton({ doc }){
  const onDownload = () => {
    const content = `Documento: ${doc.nome}\nMunicípio: ${doc.municipio}\nSecretaria: ${doc.secretaria}\nValor: ${doc.valor}\nData: ${doc.data}`;
    downloadBlob(new Blob([content], { type: 'text/plain;charset=utf-8' }), `${doc.nome}.txt`);
  };
  return <Button onClick={onDownload}>Baixar</Button>;
}