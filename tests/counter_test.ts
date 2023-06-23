
import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v1.7.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.170.0/testing/asserts.ts';

Clarinet.test({
    name: "Ensure that <...>",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        // arrange: set up the chain, state, and other required elements
        let wallet_1 = accounts.get("wallet_1")!.address;

        /*
        // act: perform actions related to the current test
        let block = chain.mineBlock([
            
            Tx.contractCall("counter", "hello-world", [], wallet_1)
            
        ]);
        console.log(block);

        // assert: review returned data, contract state, and other requirements
        let inner = block.receipts[0].result.expectOk();
        let tuple: any = inner.expectTuple();
        tuple["msg"].expectAscii("Hello World");
        tuple["tip"].expectUint(1);
        tuple["sender"].expectPrincipal("ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5");
        */
    },
});
