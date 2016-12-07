// Get all of the content from a PowerPoint or Word document in 100-KB chunks of text.
function sendFile() {
    var fileType = Office.FileType.Compressed,
        sliceSize = 1000;
    // fileType = Office.FileType.Text;

    Office.context.document.getFileAsync(fileType, {
      sliceSize: 1000
    }, function (result) {
        if (result.status == Office.AsyncResultStatus.Succeeded) {
            // Get the File object from the result.
            var myFile = result.value;
            var state = {
                file: myFile,
                counter: 0,
                sliceCount: myFile.sliceCount
            };

            console.info('getFileAsync state', state);
            updateStatus("Getting file of " + myFile.size + " bytes");
            getSlice(state);
        }
        else {
            updateStatus(result.status);
        }
    });
}

// Get a slice from the file and then call sendSlice.
function getSlice(state) {
    state.file.getSliceAsync(state.counter, function (result) {
        if (result.status == Office.AsyncResultStatus.Succeeded) {
            updateStatus("Sending piece " + (state.counter + 1) + " of " + state.sliceCount);
            sendSlice(result.value, state);
        }
        else {
            updateStatus(result.status);
        }
    });
}

function sendSlice(slice, state) {
    console.info('getSliceAsync', slice);
    closeFile(state);
}

function closeFile(state) {
    // Close the file when you're done with it.
    state.file.closeAsync(function (result) {

        // If the result returns as a success, the
        // file has been successfully closed.
        if (result.status == "succeeded") {
            updateStatus("File closed.");
        }
        else {
            updateStatus("File couldn't be closed.");
        }
    });
}
