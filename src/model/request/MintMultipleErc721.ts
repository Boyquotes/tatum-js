import {IsIn, IsNotEmpty, IsOptional, Length, Min, ValidateIf} from 'class-validator';
import {Currency} from './Currency';

export class MintMultipleErc721 {

    @IsNotEmpty()
    @Length(66, 66)
    public fromPrivateKey: string;

    @IsNotEmpty()
    public to: string[];

    @IsNotEmpty()
    public tokenId: string[];

    @IsNotEmpty()
    public url: string[];

    @IsNotEmpty()
    @Length(42, 42)
    public contractAddress: string;

    @Min(0)
    @IsOptional()
    public nonce?: number;

    @IsNotEmpty()
    @ValidateIf(o => o.chain === Currency.CELO)
    @IsIn([Currency.CELO, Currency.CUSD])
    public feeCurrency: Currency;

    @IsNotEmpty()
    @IsIn([Currency.ETH, Currency.CELO])
    public chain: Currency;
}
