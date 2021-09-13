import { Injectable } from '@angular/core';
import { FileUploadDownloadService } from '@openchannel/angular-common-services';
import { FileUploaderService, FileDetails } from '@openchannel/angular-common-components';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpResponse, HttpUploadProgressEvent } from '@angular/common/http';

@Injectable()
export class FileService extends FileUploaderService {
    constructor(private fileUploaderService: FileUploadDownloadService) {
        super();
    }

    fileUploadRequest(
        file: FormData,
        isPrivate: boolean,
        hash?: string[],
    ): Observable<HttpResponse<FileDetails> | HttpUploadProgressEvent> {
        return this.fileUploaderService.uploadToOpenChannel(file, isPrivate, hash);
    }

    fileDetailsRequest(fileId: string): Observable<FileDetails> {
        return this.fileUploaderService.downloadFileDetails(fileId, new HttpHeaders({ 'x-handle-error': '404' }));
    }
}
