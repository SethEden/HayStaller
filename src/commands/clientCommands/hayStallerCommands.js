/**
 * @file hayStallerCommands.js
 * @module hayStallerCommands
 * @description Contains all client defined commands for execution of client actions with various operations,
 * specific for installing, uninstalling, updating repairing or patching.
 * @requires module:installBroker
 * @requires module:application.command.constants
 * @requires module:application.message.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/03/23
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import installBroker from '../../brokers/installBroker.js';
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
import * as app_sys from '../../constants/application.system.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.hayStaller.commands.clientCommands.hayStallerCommands.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.ccommands + bas.cDot + wrd.cclient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function scanPath
 * @description A utility command to recursively scan a path for files and folders and store all the file names,
 * file paths, file sizes and file dates, basically all of the file meta-data.
 * This data can then be saved out to a file or printed on the screen. Or searched using another search program like Notepad++.
 * @param {array<string>} inputData The input(s) the user entered into the command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2024/01/23
 */
async function scanPath(inputData, inputMetaData) {
  let functionName = scanPath.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let arrayOfFilesAndFolders = [];
  let pathToScan = '';
  if (inputData && Array.isArray(inputData) && inputData.length > 1) {
    inputData = inputData.slice(1); // Remove the first entry from the array.
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
    if (inputData.length > 1) {
      // inputData.length is greater than 1.
      await haystacks.consoleLog(namespacePrefix, functionName, 'inputData.length is greater than 1');
      // The user may have entered a path with spaces in the folder names or file names. We should join everything back together.
      pathToScan = inputData.join(' ');
    } else {
      // inputData.length is equal to 1.
      await haystacks.consoleLog(namespacePrefix, functionName, 'inputData.length is equal to 1');
      pathToScan = inputData[0]; // Should now be the first element in the array, because we sliced it earlier.
    }
    // pathToScan is:
    await haystacks.consoleLog(namespacePrefix, functionName, 'pathToScan is: ' + pathToScan);
    arrayOfFilesAndFolders = await haystacks.executeBusinessRules([pathToScan, ''], [biz.cscanDirectoryContents]);
    // arrayOfFilesAndFolders is:
    await haystacks.consoleLog(namespacePrefix, functionName, 'arrayOfFilesAndFolders is: ' + JSON.stringify(arrayOfFilesAndFolders));
    await haystacks.storeData(wrd.cfolder + wrd.cScan, arrayOfFilesAndFolders);
  } else {
    // ERROR: You must specify a folder or path to be scanned.
    console.log(app_msg.cscanPathErrorMessage01);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function saveScanOutput
 * @description A command that saves the output to a file specified by the user as input to the command.
 * @param {array<string>} inputData the input(s) the user entered into the command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2024/01/23
 */
async function saveFolderScanOutput(inputData, inputMetaData) {
  let functionName = saveFolderScanOutput.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let arrayOfFilesAndFolders = [];
  let pathToSave = '';
  if (inputData && Array.isArray(inputData) && inputData.length > 1) {
    inputData = inputData.slice(1); // Remove the first entry from the array.
    arrayOfFilesAndFolders = await haystacks.getData(wrd.cfolder + wrd.cScan);
    console.log('arrayOfFilesAndFolders is: ', arrayOfFilesAndFolders);
    // Now make sure the path the user entered exists and attempt to write the data to the file.
    if (inputData.length > 1) {
      // inputData.length is greater than 1.
      await haystacks.consoleLog(namespacePrefix, functionName, 'inputData.length is greater than 1');
      // The user may have entered a path with spaces in the folder names or file names. We should join everything back together.
      pathToSave = inputData.join(' ');
    } else {
      // inputData.length is equal to 1.
      await haystacks.consoleLog(namespacePrefix, functionName, 'inputData.length is equal to 1');
      pathToSave = inputData[0]; // Should now be the first element in the array, because we sliced it earlier.
    }
    // pathToSave is:
    await haystacks.consoleLog(namespacePrefix, functionName, 'pathToSave is: ' + pathToSave);
    pathToSave = path.normalize(pathToSave);
    pathToSave = path.resolve(pathToSave);
    // pathToSave is:
    await haystacks.consoleLog(namespacePrefix, functionName, 'pathToSave is: ' + pathToSave);
    // arrayOfFilesAndFolders = await haystacks.executeBusinessRules([pathToScan, ''], [biz.cscanDirectoryContents]);
    for (let fileEntryKey in arrayOfFilesAndFolders) {
      let fileEntry = arrayOfFilesAndFolders[fileEntryKey];
      if (fileEntry) {
        let fileSaveOp = await haystacks.executeBusinessRules([pathToSave, fileEntry], [biz.cappendMessageToFile]);
        // NOTE: The function appendMessageToFile is hard-coded to always return FALSE, this is a bug, must be fixed!!
        // if (fileSaveOp === false) {
        //   // ERROR: Failed to save to the specified file:
        //   console.log('ERROR: Failed to save to the specified file: ' + pathToSave);
        // }
      }
    }
  } else {
    // ERROR: You must specify a file name and path to save the data to.
    console.log(app_msg.csaveFolderScanOutputMessage01);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  scanPath,
  saveFolderScanOutput
}