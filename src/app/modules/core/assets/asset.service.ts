
import {HttpClient} from "@angular/common/http";
import {url} from "./asset.url";
import {Injectable} from "@angular/core";
import {Asset, CompareAssetsResponse} from "./asset";

@Injectable({
  providedIn: 'root',
})
export class AssetService {

  headers = { 'X-Requested-With': 'XMLHttpRequest' };
  options = {
    responseType: 'json',
    observe: 'response',
  }

  constructor(
    private readonly client: HttpClient,
  ) {}

  getAssets() {
    return this.client.get<Asset[]>(url.assetsList.url);
  }

  compareAssets(assetType1: string, assetType2: string) {
    return this.client.post<CompareAssetsResponse>(url.assetsCompare.url, {assetType1: assetType1, assetType2: assetType2}, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      responseType: 'json',
      observe: 'body'
    });
  }

}
